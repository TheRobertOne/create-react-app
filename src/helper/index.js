export default {
    /**
     * 交换数组的里的item
     */
    swapArr: (array, first, second) => {
        let tmp = null;
        tmp = array[first];
        array[first] = array[second];
        array[second] = tmp;
        return array; 
    },
    /**
     * 删除数组的item并把这个item插入到insertIndex的位置
     */
    insertArr: (array, deleteIndex, insertIndex) => {
        const dragCard = array[deleteIndex];
        array.splice(deleteIndex, 1)
        array.splice(insertIndex, 0, dragCard);
        return array;
    }
}