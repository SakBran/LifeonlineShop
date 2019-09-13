import { categoryLabel } from "./model/categoryLabel";
import { unicode2zawgyi1 } from "./Unicode2Zawgyi";
import { navigationLabel } from "./model/navigationLabel";
import { registerLabel } from "./model/registerLabel";
import { msgLabel } from "./model/msgLabel";
import { zawgyi2Unicode } from "./Zawgyi2Unicode";

export class appSetting {
  constructor(private U2Z: unicode2zawgyi1, private Z2U: zawgyi2Unicode) {}
  public catTitle: categoryLabel = {
    woman: "အမျိုးသမီးဝတ်",
    man: "အမျိုးသားဝတ်",
    bag: "အိတ်အမျိုးမျိုး",
    health: "အလှအပနှင့်ကျန်းမာရေးပစ္စည်းများ",
    baby: "ကလေးအသုံးဆောင်",
    foods: "စားသောက်ကုန်",
    footwear: "ဖိနပ်အမျိုးမျိုး",
    jewel: "လက်ဝတ်ရတနာနှင့်ဖန်စီများ",
    phone: "ဖုန်းနှင့်ဆက်စပ်ပစ္စည်းများ",
    electronic: "အီလက်ထရောနစ်ပစ္စည်းများ"
  };

  public navTitle: navigationLabel = {
    Home: "ပင်မစာမျက်နာ",
    ContactUs: "ဆက်သွယ်ရန်",
    AboutUs: "ကျွနုပ်တို့အကြောင်း",
    Register: "စနစ်သို့ဝင်မည်"
  };

  public registerTitle: registerLabel = {
    name: "အမည်",
    phone: "ဖုန်းနံပါတ်",
    address: "လိပ်စာ",
    city: "မြို့အမည်",
    state: "တိုင်းနှင့်ပြည်နယ်",
    reveive: "ပစ္စည်းလက်ခံ"
  };

  public msgTitle: msgLabel = {
    required: "လိုအပ်ပါသည်။",
    success: "အောင်မြင်ပါသည်။",
    fail: "တစ်ခုခုတော့မှားနေပါပြီ။",
    pending: "လုပ်ဆောင်ဆဲဖြစ်ပါသည်။",
    loading: "လုပ်ဆောင်ဆဲဖြစ်ပါသည်။",
    sorry: "စိတ်မကောင်းပါဘူး။",
    wrong: "တစ်ခုခုတော့မှားနေပါပြီ။",
    submit: "ဆက်လုပ်မည်",
    pay: "ငွေချေမည်",
    close: "ပိတ်မည်",
    detail: "အသေးစိတ်အချက်အလက်",
    addtocart: "ဝယ်ယူမည့်ထဲပေါင်းထည့်မည်",
    remove: "ဖယ်ထုတ်မည်",
    changeFont: "Zawgyi/Unicode",
    change: "ပြောင်းလဲမည်။",
    search: "ရှာဖွေရန်"
  };
  //Change obejcet property's informations to zawgyi fonts
  public zawgyiConvert(obj): object {
    var result = ``;
    for (var i in obj) {
      // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
      if (obj.hasOwnProperty(i)) {
        if (typeof i == "number") {
          result += `"${i}" : ${this.U2Z.Unicode_Z1(obj[i])},`;
        } else {
          result += `"${i}" : "${this.U2Z.Unicode_Z1(obj[i])}",`;
        }
      }
    }
    var answer = result.slice(0, result.length - 1);
    return JSON.parse(`{` + answer + `}`);
  }
  //Change obejcet property's informations to unicode fonts
  public unicodeConvert(obj): object {
    var result = ``;
    for (var i in obj) {
      // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
      if (obj.hasOwnProperty(i)) {
        if (typeof i == "number") {
          result += `"${i}" : ${this.Z2U.Z1_Unicode(obj[i])},`;
        } else {
          result += `"${i}" : "${this.Z2U.Z1_Unicode(obj[i])}",`;
        }
      }
      var answer = result.slice(0, result.length - 1);
      return JSON.parse(`{` + answer + `}`);
    }
  }
  //Change unicode font to zawgyi for UI output
  public fontSession(obj): object {
    if (localStorage.getItem("font") == "z") {
      return this.zawgyiConvert(obj);
    } else {
      return obj;
    }
  }
  //Change Zawgyi font to unicode for datas insert to DB
  public inputFontSession(obj): object {
    if (localStorage.getItem("font") == "z") {
      return this.unicodeConvert(obj);
    } else {
      return obj;
    }
  }
}
