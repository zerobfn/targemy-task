export const calculteTimeBefore = function(time) {
    const seconds = Math.floor((new Date() - new Date(time)) / 1000)
    let interval = seconds / 31536000
    let str = ''
    if (interval >= 5) {
        str = `${Math.floor(interval)} лет`
    } else if (interval >= 2) {
        str = `${Math.floor(interval)} года`
    } else if (interval >= 1) {
        str = `год`
    } else {
        interval = seconds / 2592000;
        if (interval >= 5) {
            str = `${Math.floor(interval)} месяцев`
        } else if (interval >= 2) {
            str = `${Math.floor(interval)} месяца`
        } else if (interval >= 1) {
            str = 'месяц'
        } else {
            interval = seconds / 86400
            if (interval >= 5) {
                str = `${Math.floor(interval)} дней`
            } else if (interval >= 2) {
                str = `${Math.floor(interval)} дня`
            } else if (interval >= 1) {
                str = 'один день'
            } else {
                interval = seconds / 3600
                if (interval >= 5) {
                    str = `${Math.floor(interval)} часов`
                } else if (interval >= 2) {
                    str = `${Math.floor(interval)} часа`
                } else if (interval >= 1) {
                    str = 'час'
                } else {
                    interval = seconds / 60
                    interval = seconds / 3600
                    if (interval >= 5) {
                        str = `${Math.floor(interval)} минут`
                    } else if (interval >= 2) {
                        str = `${Math.floor(interval)} минуты`
                    } else if (interval >= 1) {
                        str = 'минуту'
                    } else {
                        str = 'меньше минуты'
                    }
                }
            }
        }
    }
    return `${str} назад`
}