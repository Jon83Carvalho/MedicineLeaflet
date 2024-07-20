import { XMLValidator } from 'fast-xml-parser';
import { XMLParser } from 'fast-xml-parser';

import { flatten } from 'flat'


export function documentReader (xmlFile) {
  

///////////XML Validation==========================
const result = XMLValidator.validate(xmlFile);
if (result === true) {
  console.log(`XML file is valid`, result);
}

if (result.err) {
  console.log(`XML is invalid becuause of - ${result.err.msg}`, result);
}
////////////XMLvalidation++++++++++++++++++++++++


//xml file from https://learn.microsoft.com/en-us/previous-versions/windows/desktop/ms762271(v=vs.85)
//const xmlFile = readFileSync(`${process.cwd()}/xml/books.xml`, 'utf8');
const parser = new XMLParser();
const json = parser.parse(xmlFile);
var text = ''
for (t in Object.values(flatten(json))){
const flattext=Object.values(flatten(json))
   if (flattext[t]!="") { 
   text=text.concat(Object.values(flattext)[t],'\n')
   }
}
//console.log(`First book: `, text);


return text
}