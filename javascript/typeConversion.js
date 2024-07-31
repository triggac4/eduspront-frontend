const sum = "5" + 5;

// conversion rules
// 1. number to string
const numberToString = "" + 1;
const numberToString2 = String(1);
console.log({ numberToString });
console.log({ numberToString2 });
// 2. boolean to string
const trueToString = "" + true;
const trueToString2 = String(true);
console.log({ trueToString });
console.log({ trueToString2 });

const falseToString = "" + false;
const falseToString2 = String(false);
console.log({ falseToString });
console.log({ falseToString2 });
// 3. null to string
const nullToString = "" + null;
const nullToString2 = String(null);
console.log({ nullToString });
console.log({ nullToString2 });
// 4. undefined to string
const undefinedToString = "" + undefined;
const undefinedToString2 = String(undefined);
console.log({ undefinedToString });
console.log({ undefinedToString2 });
// 5. object to string
const objectToString = "" + { name: "samuel" };
const objectToString2 = String({ name: "samuel" });
console.log({ objectToString });
console.log({ objectToString2 });

// 6. conversion to number
const stringToNumber = Number("5");
console.log({ stringToNumber });

const stringToNumber2 = Number("samuel");
console.log({ stringToNumber2 });

0 == false;
48 == true;
//for numbers everything is equal to 2 apart from 0
const booleanToNumber = Number({ name: "samuel" });
console.log({ booleanToNumber });

//boolean conversion
//falsey values

const toBoolean = Boolean(0);
const toBoolean2 = Boolean("");
const toBoolean3 = Boolean(null);
const toBoolean4 = Boolean(undefined);
const toBoolean5 = Boolean(NaN);
const toBoolean6 = Boolean(false);

const a = 1;
const b = 5;

if (a - b) {
   
}
const toBoolean7 = Boolean(" ");
console.log({
  toBoolean,
  toBoolean2,
  toBoolean3,
  toBoolean4,
  toBoolean5,
  toBoolean6,

  toBoolean7,
});

0;
("");
null;
undefined;
NaN;
false;
