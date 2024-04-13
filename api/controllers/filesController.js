import ToolBox from "../services/toolbox.js";

class FilesController {

    constructor(){
        this.toolbox = new ToolBox;
        this.files = []
        this.filesData = []
    }

    async listFiles() {
        return await this.toolbox.getListFiles()
    }

    async getOneDataFile(fileName) {
        const regex = /,\s*|\n/;
        const stringData = await this.toolbox.getFileData(fileName)
        const array = stringData.split(regex).filter((value) => {
            return value !== '';
        })
        return this.checkDataFile(array)

    }

    async getAllDataFiles() {
        this.files = await this.toolbox.getListFiles()

        for (const fileName of Array.from(this.files)) {
            const resData =  await this.getOneDataFile(fileName)
            this.filesData = [].concat(this.filesData, resData)
        }

        return this.filesData

    }

    checkDataFile(data) {
        let parsedData = [];
        let currentFile = null;
        let currentText = null;
        let currentNumber = null;
        let currentHex = null;

        for (const item of data) {
            if (item.endsWith('.csv')) {
                if (currentFile && currentText && currentNumber && currentHex) {
                    parsedData.push({
                        file: currentFile,
                        lines: [{
                            text: currentText,
                            number: parseInt(currentNumber),
                            hex: currentHex
                        }]
                    });
                }
                currentFile = item;
                currentText = null;
                currentNumber = null;
                currentHex = null;
            } else if (currentText === null) {
                currentText = isNaN(parseInt(item)) ? item : null;
            } else if (currentNumber === null) {
                currentNumber = isNaN(parseInt(item)) ? null : item;
            } else if (currentHex === null) {
                currentHex = item.length === 32 && /^[0-9a-fA-F]+$/.test(item) ? item : null;
            }
        }

        if (currentFile && currentText && currentNumber && currentHex) {
            parsedData.push({
                file: currentFile,
                lines: [{
                    text: currentText,
                    number: parseInt(currentNumber),
                    hex: currentHex
                }]
            });
        }
        return parsedData;
    }
}

export default FilesController;