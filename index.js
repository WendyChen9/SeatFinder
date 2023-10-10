
function tableFinder() {

    var lastName = document.getElementById("floatingInput").value.toLowerCase();

    const t3 = ["3","Alex Akaka", "Bella Weiss", "Kellen Chow", "Matthew Matsunaga", "Elena Rosenberg-Carlson"].map(v => v.toLowerCase());
    const t4 = ["4", "Michael Miller", "Greg Madrey-Miller", "Amy Ku", "Eric Bicocchi", "May Salcedo", "Bryson Monma"].map(v => v.toLowerCase());
    const t5 = ["5","Igor Katsyv", "Joy Guo", "Carleigh Canterbury", "Austin Shackelford", "Kelsey Uyeda", "Chris Uyeda"].map(v => v.toLowerCase());
    const t6 = ["6", "Wen-Dai Lin", "Christian Simifranca", "Megan Marler", "Melvin Lin", "Dean Lin", "Sean Lin"].map(v => v.toLowerCase());

    var tables = [t3, t4, t5];
    var num;
    for (let i = 0; i < tables.length; i++){
        
        if(tables[i].includes(lastName)){
            console.log(tables[i][0]);
            num = tables[i][0];
        }
    }

    document.getElementById("tableNum").innerHTML = num;

}

function submitClick() {
    var passInput = document.getElementById("floatingPassword");
    passInput = addEventListener('keydown', (e) => {
        if(e.key == 'Enter'){
            document.getElementById("submitButton").click();
        }
    });
}
