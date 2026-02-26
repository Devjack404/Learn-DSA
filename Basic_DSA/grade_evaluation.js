function checkGrade(test_scores) {

    if (test_scores >= 90) {
        return "Grade A";
    } 
    else if (test_scores >= 80) {
        return "Grade B";
    } 
    else if (test_scores >= 70) {
        return "Grade C";
    } 
    else if (test_scores >= 60) {
        return "Grade D";
    } 
    else {
        return "Grade E";
    }
}

// Test cases
console.log(checkGrade(80));
console.log(checkGrade(95));
console.log(checkGrade(50));