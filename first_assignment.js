// 과제는 JavaScript과제로 올립니다. HTML로 검증완료...
    let employeeData = [
    {name : "홍길동", hour : 40, hourlyWage : 100000},
    {name : "임꺽정", hour : 15, hourlyWage : 200000},
    {name : "장길산", hour : 20, hourlyWage : 200000},
    {name : "강감찬", hour : 30, hourlyWage : 150000},
    {name : "이순신", hour : 40, hourlyWage : 300000},
];

employeeData.forEach( (e)=> {
    console.log(`이름 : ${e.name}, 근무시간 : ${e.hour}, 시간당급여액 : ${e.hourlyWage}, 
    총액 : ${e.totalSalary = e.hourlyWage * e.hour}`)
});
