const getImage = (url, fileName, folder = "") => {
    const subDirectory = folder ? folder.toLowerCase() + "/" : "";
    const finalUrl = url + subDirectory + fileName.replaceAll(` `, `-`).toLowerCase() + ".png";
    return finalUrl;
};

export { getImage };
