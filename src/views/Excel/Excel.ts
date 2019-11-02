import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class Excel extends Vue {
  public $refs!: {
    imageInput: any;
  };

  private name: string = '';
  private testJsonObject = {
    a: 'test',
    b: 'good'
  };

  private showTestJsonObject() {
    console.log('testJsonObject', this.testJsonObject);
  }

  private pickFile() {
    this.$refs.imageInput.click();
  }

  private onFilePicked(e: any) {
    console.log('onFilePicked');
    const files = e.target.files;

    if (files[0] !== undefined) {
      // files[0].name;
      const fileReader = new FileReader();
      fileReader.readAsText(files[0]);
      fileReader.addEventListener('load', () => {
        // csv형식을 string text로 만든다.
        const csvText: string = fileReader.result as string;
        // console.log('csvText', csvText);

        // csv string을 json으로 바꾼다.
        const jsonResult = this.csvJSON(csvText);
        console.log('jsonResult', jsonResult);
      });
    }
  }

  /**
   * csv(string)형식의 text를 json으로 변환해주는 함수이다.
   * @param csv the CSV file with headers
   */
  private csvJSON(csv: string) {
    const lines = csv.split('\n');

    const result: any[] = [];

    const headers = lines[0].split(',');

    for (let i = 1; i < lines.length; i++) {
      const obj = {};
      const currentline = lines[i].split(',');

      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }

      result.push(obj);
    }

    return result; // JavaScript object
    // return JSON.stringify(result); // JSON
  }

  private mounted() {
    //
  }
}
