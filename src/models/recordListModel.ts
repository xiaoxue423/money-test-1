import clone from '@/lib/clone.ts'

const localStorageKeyName = 'recordList';
const recordListModel = {
    // const deepClone = JSON.parse(JSON.stringify(this.record)); 深拷贝
    // clone(data: RecordItem[] | RecordItem){
    //     return JSON.parse(JSON.stringify(data));
    // },
    data:[] as RecordItem[],
    create(record: RecordItem) {
        const record2: RecordItem = clone(record);
        record2.createdAt = new Date();
        this.data.push(record2);
    },
    fetch(){ //获取数据
        // const x: RecordItem[] = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]')
        // return x;
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
        return this.data;
    },
    save(data: RecordItem[]){ //保存数据
        window.localStorage.setItem(localStorageKeyName,JSON.stringify(data))
    }
};

// export default recordListModel
export  {recordListModel}