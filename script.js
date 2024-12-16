

document.addEventListener('DOMContentLoaded', function() {
    // 显示当前时间（精确到秒）和日期
    function displayCurrentDateTime() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const dateTimeString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        const dateTimeElement = document.getElementById('currentDateTime');
        if (dateTimeElement) {
            dateTimeElement.textContent = dateTimeString;
        }
    }

    // 每秒更新一次时间
    setInterval(displayCurrentDateTime, 1000);
    displayCurrentDateTime(); // 初始化显示

    // 获取并显示每日一言
    function fetchDailyHitokoto() {
        fetch('https://v1.hitokoto.cn')
            .then(response => response.json())
            .then(data => {
                const hitokotoElement = document.getElementById('dailyHitokoto');
                if (hitokotoElement) {
                    hitokotoElement.textContent = `"${data.hitokoto}" -- ${data.from_who}`;
                }
            })
            .catch(error => {
                console.error('无法获取每日一言:', error);
                const hitokotoElement = document.getElementById('dailyHitokoto');
                if (hitokotoElement) {
                    hitokotoElement.textContent = '每日一言加载失败，请稍后再试。';
                }
            });
    }

    // 初始化显示每日一言
    fetchDailyHitokoto();
});
