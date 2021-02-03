const getVideoName = ()=>{
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    month = month < 10 ? '0'+month : month;
    let day = today.getDate() < 10 ? '0'+today.getDate() : today.getDate();
    let hours = today.getHours() < 10 ? '0'+today.getHours() : today.getHours();
    let mins = today.getMinutes() < 10 ? '0'+today.getMinutes() : today.getMinutes();
    let secs = today.getSeconds() < 10 ? '0'+today.getSeconds() : today.getSeconds();
    let time = `${year}${month}${day}${hours}${mins}${secs}`;
    let mobileId = localStorage.getItem('mobileId');
    return `${mobileId}_${time}`;
}

export default {
    getVideoName
}
