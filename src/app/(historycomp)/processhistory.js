export const processedHistory = () => {
    const storedHistory = localStorage.getItem('convHistory');
    const getHistory = storedHistory ? JSON.parse(storedHistory) : [];
    const now = new Date();

    const today = [];
    const yesterday = [];
    const previous7Days = [];
    const previous30Days = [];
    const older = [];

    getHistory.forEach(hist => {
        const histDate = new Date(hist.date);

        const diffDays = Math.floor((now - histDate) / (1000 * 3600 * 24));

        if (diffDays === 0) {
            today.push(hist);
        } else if (diffDays === 1) {
            yesterday.push(hist);
        } else if (diffDays > 1 && diffDays <= 8) {
            previous7Days.push(hist);
        } else if (diffDays >= 8 && diffDays <= 30) {
            previous30Days.push(hist);
        } else {
            older.push(hist);
        }

    });


    return {
        today,
        yesterday,
        previous7Days,
        previous30Days,
        older
    }
}