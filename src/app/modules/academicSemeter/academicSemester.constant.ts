import { TAcademicSemesterNameCodeMapper, TMonth, academicSemesterCode, academicSemesterName } from "./academicSemester.interface";

export const months: TMonth[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

 export const AcademicSemesterName:academicSemesterName[] = [
  'Spring' , 'Summer' , 'Fall'];

 export const AcademicSemesterCode: academicSemesterCode[] = [
    '01' , '02' ,'03'
  ];

  export const academicSemesterNameCodeMapper:TAcademicSemesterNameCodeMapper = {
    Spring: '01',
    Summer: '02',
    Fall: '03',
    }