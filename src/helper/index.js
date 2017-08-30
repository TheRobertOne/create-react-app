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
    }
}