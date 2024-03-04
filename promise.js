const API = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const data = "documents here"
            const nodata = "failed"
            if (data) {
                resolve(data)
            }
            else {
                reject(nodata)
            }
        }, 2000)
    })
}

async function profile() {
    try {
        const profiledata = await API()
        console.log(profiledata);
    } catch (error) {
        console.log(error);
    }
}


