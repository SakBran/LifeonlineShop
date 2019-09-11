// JavaScript Document
//Version: 1.0
//Author: The` The` Aye
//Release:August 07,2009
//Name:Unicode5.1 to ZawgyiOne Converter
export class unicode2zawgyi1 {
  public Unicode_Z1(utext): string {
    var zgtext = utext;

    zgtext = zgtext.replace(/\u104E\u1004\u103A\u1038/g, "\u104E");
    zgtext = zgtext.replace(/\u102B\u103A/g, "\u105A");
    zgtext = zgtext.replace(/\u102D\u1036/g, "\u108E");
    zgtext = zgtext.replace(/\u103F/g, "\u1086");

    zgtext = zgtext.replace(/(\u102F[\u1036]?)\u1037/g, function($0, $1) {
      return $1 ? $1 + "\u1094" : $0 + $1;
    });
    zgtext = zgtext.replace(/(\u1030[\u1036]?)\u1037/g, function($0, $1) {
      return $1 ? $1 + "\u1094" : $0 + $1;
    });
    zgtext = zgtext.replace(/(\u1014[\u103A\u1032]?)\u1037/g, function($0, $1) {
      return $1 ? $1 + "\u1094" : $0 + $1;
    });
    zgtext = zgtext.replace(/(\u103B[\u1032\u1036]?)\u1037/g, function($0, $1) {
      return $1 ? $1 + "\u1095" : $0 + $1;
    });

    zgtext = zgtext.replace(/(\u103D[\u1032]?)\u1037/g, function($0, $1) {
      return $1 ? $1 + "\u1095" : $0 + $1;
    });

    zgtext = zgtext.replace(
      /([\u103B\u103C\u103D][\u102D\u1036]?)\u102F/g,
      function($0, $1) {
        return $1 ? $1 + "\u1033" : $0 + $1;
      }
    );
    zgtext = zgtext.replace(
      /((\u1039[\u1000-\u1021])[\u102D\u1036]?)\u102F/g,
      function($0, $1) {
        return $1 ? $1 + "\u1033" : $0 + $1;
      }
    );
    zgtext = zgtext.replace(
      /([\u100A\u100C\u1020\u1025\u1029][\u102D\u1036]?)\u102F/g,
      function($0, $1) {
        return $1 ? $1 + "\u1033" : $0 + $1;
      }
    );
    zgtext = zgtext.replace(
      /([\u103B\u103C][\u103D]?[\u103E]?[\u102D\u1036]?)\u1030/g,
      function($0, $1) {
        return $1 ? $1 + "\u1034" : $0 + $1;
      }
    );
    // uu - 2
    zgtext = zgtext.replace(
      /((\u1039[\u1000-\u1021])[\u102D\u1036]?)\u1030/g,
      function($0, $1) {
        return $1 ? $1 + "\u1034" : $0 + $1;
      }
    );
    // uu - 2
    zgtext = zgtext.replace(
      /([\u100A\u100C\u1020\u1025\u1029][\u102D\u1036]?)\u1030/g,
      function($0, $1) {
        return $1 ? $1 + "\u1034" : $0 + $1;
      }
    );
    // uu - 2

    zgtext = zgtext.replace(/(\u103C)\u103E/g, function($0, $1) {
      return $1 ? $1 + "\u1087" : $0 + $1;
    });
    // ha - 2

    zgtext = zgtext.replace(/\u1009(?=[\u103A])/g, "\u1025");
    zgtext = zgtext.replace(/\u1009(?=\u1039[\u1000-\u1021])/g, "\u1025");

    // E render
    zgtext = zgtext.replace(
      /([\u1000-\u1021\u1029])(\u1039[\u1000-\u1021])?([\u103B-\u103E\u1087]*)?\u1031/g,
      "\u1031$1$2$3"
    );

    // Ra render

    zgtext = zgtext.replace(
      /([\u1000-\u1021\u1029])(\u1039[\u1000-\u1021\u1000-\u1021])?(\u103C)/g,
      "$3$1$2"
    );

    // Kinzi
    zgtext = zgtext.replace(/\u1004\u103A\u1039/g, "\u1064");
    // kinzi
    zgtext = zgtext.replace(
      /(\u1064)([\u1031]?)([\u103C]?)([\u1000-\u1021])\u102D/g,
      "$2$3$4\u108B"
    );
    // reordering kinzi lgt
    zgtext = zgtext.replace(
      /(\u1064)(\u1031)?(\u103C)?([ \u1000-\u1021])\u102E/g,
      "$2$3$4\u108C"
    );
    // reordering kinzi lgtsk
    zgtext = zgtext.replace(
      /(\u1064)(\u1031)?(\u103C)?([ \u1000-\u1021])\u1036/g,
      "$2$3$4\u108D"
    );
    // reordering kinzi ttt
    zgtext = zgtext.replace(
      /(\u1064)(\u1031)?(\u103C)?([ \u1000-\u1021])/g,
      "$2$3$4\u1064"
    );
    // reordering kinzi

    // Consonant

    zgtext = zgtext.replace(/\u100A(?=[\u1039\u102F\u1030])/g, "\u106B");
    // nnya - 2
    zgtext = zgtext.replace(/\u100A/g, "\u100A");
    // nnya

    zgtext = zgtext.replace(/\u101B(?=[\u102F\u1030])/g, "\u1090");
    // ra - 2
    zgtext = zgtext.replace(/\u101B/g, "\u101B");
    // ra

    zgtext = zgtext.replace(
      /\u1014(?=[\u1039\u103D\u103E\u102F\u1030])/g,
      "\u108F"
    );
    // na - 2
    zgtext = zgtext.replace(/\u1014/g, "\u1014");
    // na

    // Stacked consonants
    zgtext = zgtext.replace(/\u1039\u1000/g, "\u1060");
    zgtext = zgtext.replace(/\u1039\u1001/g, "\u1061");
    zgtext = zgtext.replace(/\u1039\u1002/g, "\u1062");
    zgtext = zgtext.replace(/\u1039\u1003/g, "\u1063");
    zgtext = zgtext.replace(/\u1039\u1005/g, "\u1065");
    zgtext = zgtext.replace(/\u1039\u1006/g, "\u1066");
    // 1067
    zgtext = zgtext.replace(
      /([\u1001\u1002\u1004\u1005\u1007\u1012\u1013\u108F\u1015\u1016\u1017\u1019\u101D])\u1066/g,
      function($0, $1) {
        return $1 ? $1 + "\u1067" : $0 + $1;
      }
    );
    // 1067
    zgtext = zgtext.replace(/\u1039\u1007/g, "\u1068");
    zgtext = zgtext.replace(/\u1039\u1008/g, "\u1069");

    zgtext = zgtext.replace(/\u1039\u100F/g, "\u1070");
    zgtext = zgtext.replace(/\u1039\u1010/g, "\u1071");
    // 1072 omit (little shift to right)
    zgtext = zgtext.replace(
      /([\u1001\u1002\u1004\u1005\u1007\u1012\u1013\u108F\u1015\u1016\u1017\u1019\u101D])\u1071/g,
      function($0, $1) {
        return $1 ? $1 + "\u1072" : $0 + $1;
      }
    );
    // 1067
    zgtext = zgtext.replace(/\u1039\u1011/g, "\u1073");
    // \u1074 omit(little shift to right)
    zgtext = zgtext.replace(
      /([\u1001\u1002\u1004\u1005\u1007\u1012\u1013\u108F\u1015\u1016\u1017\u1019\u101D])\u1073/g,
      function($0, $1) {
        return $1 ? $1 + "\u1074" : $0 + $1;
      }
    );
    // 1067
    zgtext = zgtext.replace(/\u1039\u1012/g, "\u1075");
    zgtext = zgtext.replace(/\u1039\u1013/g, "\u1076");
    zgtext = zgtext.replace(/\u1039\u1014/g, "\u1077");
    zgtext = zgtext.replace(/\u1039\u1015/g, "\u1078");
    zgtext = zgtext.replace(/\u1039\u1016/g, "\u1079");
    zgtext = zgtext.replace(/\u1039\u1017/g, "\u107A");
    zgtext = zgtext.replace(/\u1039\u1018/g, "\u107B");
    zgtext = zgtext.replace(/\u1039\u1019/g, "\u107C");
    zgtext = zgtext.replace(/\u1039\u101C/g, "\u1085");

    zgtext = zgtext.replace(/\u100F\u1039\u100D/g, "\u1091");
    zgtext = zgtext.replace(/\u100B\u1039\u100C/g, "\u1092");
    zgtext = zgtext.replace(/\u1039\u100C/g, "\u106D");
    zgtext = zgtext.replace(/\u100B\u1039\u100B/g, "\u1097");
    zgtext = zgtext.replace(/\u1039\u100B/g, "\u106C");
    zgtext = zgtext.replace(/\u100E\u1039\u100D/g, "\u106F");
    zgtext = zgtext.replace(/\u100D\u1039\u100D/g, "\u106E");

    zgtext = zgtext.replace(/\u1009(?=\u103A)/g, "\u1025");
    // u
    zgtext = zgtext.replace(/\u1025(?=[\u1039\u102F\u1030])/g, "\u106A");
    // u - 2
    zgtext = zgtext.replace(/\u1025/g, "\u1025");
    // u
    /////////////////////////////////////

    zgtext = zgtext.replace(/\u103A/g, "\u1039");
    // asat

    zgtext = zgtext.replace(/\u103B\u103D\u103E/g, "\u107D\u108A");
    // ya wa ha
    zgtext = zgtext.replace(/\u103D\u103E/g, "\u108A");
    // wa ha

    zgtext = zgtext.replace(/\u103E\u102F/g, "\u1088"); //ha u

    zgtext = zgtext.replace(/\u103E\u1030/g, "\u1089"); //ha uu

    zgtext = zgtext.replace(/\u103B/g, "\u103A");
    // ya
    zgtext = zgtext.replace(/\u103C/g, "\u103B");
    // ra
    zgtext = zgtext.replace(/\u103D/g, "\u103C");
    // wa
    zgtext = zgtext.replace(/\u103E/g, "\u103D");
    // ha
    zgtext = zgtext.replace(/\u103A(?=[\u103C\u103D\u108A])/g, "\u107D");
    // ya - 2

    zgtext = zgtext.replace(
      /(\u100A(?:[\u102D\u102E\u1036\u108B\u108C\u108D\u108E])?)\u103D/g,
      function($0, $1) {
        //      return $1 ? $1 + '\u1087 ' : $0 + $1;
        return $1 ? $1 + "\u1087" : $0;
      }
    );
    // ha - 2

    zgtext = zgtext.replace(
      /\u103B(?=[\u1000\u1003\u1006\u100F\u1010\u1011\u1018\u101A\u101C\u101E\u101F\u1021])/g,
      "\u107E"
    );
    // great Ra with wide consonants
    zgtext = zgtext.replace(
      /\u107E([\u1000-\u1021\u108F])(?=[\u102D\u102E\u1036\u108B\u108C\u108D\u108E])/g,
      "\u1080$1"
    );
    // great Ra with upper sign
    zgtext = zgtext.replace(
      /\u107E([\u1000-\u1021\u108F])(?=[\u103C\u108A])/g,
      "\u1082$1"
    );
    // great Ra with under signs

    zgtext = zgtext.replace(
      /\u103B([\u1000-\u1021\u108F])(?=[\u102D \u102E \u1036 \u108B \u108C \u108D \u108E])/g,
      "\u107F$1"
    );
    // little Ra with upper sign

    zgtext = zgtext.replace(
      /\u103B([\u1000-\u1021\u108F])(?=[\u103C\u108A])/g,
      "\u1081$1"
    );
    // little Ra with under signs

    zgtext = zgtext.replace(/(\u1014[\u103A\u1032]?)\u1037/g, function($0, $1) {
      return $1 ? $1 + "\u1094" : $0 + $1;
    });
    // aukmyint
    zgtext = zgtext.replace(/(\u1033[\u1036]?)\u1094/g, function($0, $1) {
      return $1 ? $1 + "\u1095" : $0 + $1;
    });
    // aukmyint
    zgtext = zgtext.replace(/(\u1034[\u1036]?)\u1094/g, function($0, $1) {
      return $1 ? $1 + "\u1095" : $0 + $1;
    });
    // aukmyint
    zgtext = zgtext.replace(/([\u103C\u103D\u108A][\u1032]?)\u1037/g, function(
      $0,
      $1
    ) {
      return $1 ? $1 + "\u1095" : $0 + $1;
    });
    // aukmyint
    return zgtext;
  }
  // Uni_Z1
}
