import { useState, useEffect, useRef } from 'react'

const useManagement = () => {
    const [tasks, setTasks] = useState([]);
    //計算已完成的數量
    const [completedTasks, setCompletedTasks] = useState(0);
    const [percentage, setPercentage] = useState(0);
    //轉換排序，用來顯示
    const [combineTasks, setCombineTasks] = useState([]);
    const [btnToggle, setBtnToggle] = useState(false);
    const tasksContainerRef = useRef(null);

    useEffect(() => {
        //新增 or 刪除時計算完成進度
        calculateProgressBar(tasks.length, completedTasks);

        //排序
        sortList();
    }, [tasks]);

    //切壞是否做完時排序
    useEffect(() => { sortList() }, [btnToggle])

    const sortList = () => {
        //後輸入的資料放後面
        const sortList = tasks.slice().reverse();

        if (btnToggle) {
            //已完成與未完成分開，再合併
            const completedTasks = sortList.filter((task) => task.completed);
            const remainingTasks = sortList.filter((task) => !task.completed);
            setCombineTasks([...remainingTasks, ...completedTasks]);
        }
        else {
            setCombineTasks(sortList);
        }
    }

    const handleAddList = (newTaskItem) => {
        setTasks([newTaskItem, ...tasks]);

        //新增時scroll移到最下面
        setTimeout(() => {
            tasksContainerRef.current.scrollTo(0, tasksContainerRef.current.scrollHeight);
        }, 100);
    };

    const handleToggleComplete = (id) => {
        //打勾對應的data，complete更改
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );

        //存回list
        setTasks(updatedTasks);

        //更新已完成的數量
        const completedCount = updatedTasks.filter(task => task.completed).length;
        setCompletedTasks(completedCount);
    };

    const handleDeleteTask = (id, completed) => {
        //刪除
        const updatedTasks = tasks.filter((task) => task.id !== id);

        setTasks(updatedTasks);
        //若已完成須扣除完成數量
        if (completed) setCompletedTasks(completedTasks - 1);
    };

    const calculateProgressBar = (taskCount, completedTasks) => {
        //計算完成度
        const precentage = taskCount > 0 ? (Math.round(completedTasks * 100 / taskCount)) : 0;

        setPercentage(precentage);
    }

    return {
        tasks,
        combineTasks,
        tasksContainerRef,
        percentage,
        handleAddList,
        handleToggleComplete,
        handleDeleteTask,
        setBtnToggle,
    };
}

export default useManagement
