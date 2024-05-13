
function createTvScreenSizes(tvSizesArray) {
    let tvScreenSizes = '';

    for (let i = 0; i < tvSizesArray.length; i++) {
        const screenSizeInches = tvSizesArray[i];
        const screenSizeCm = Math.round(tvSizesArray[i] * 2.54);

        tvScreenSizes += `${screenSizeInches} inch (${screenSizeCm} cm)`;

        if (i < tvSizesArray.length - 1) {
            tvScreenSizes = `${tvScreenSizes} | `;
        }
    }
    return tvScreenSizes;
}

export default createTvScreenSizes;