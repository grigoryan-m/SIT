function replace(find, replace){
    document.getElementById("description").innerHTML = document.getElementById("description").innerHTML.replaceAll(find, replace);
}

window.onload = function(){
        let d = document.getElementById("description");
        replace("///", "<p class='test'>");
        replace("\\\\\\", "</p>");
        replace("((", "</span><span class='block'><b>Сотрудник SIT: </b>");
        replace("))", "</span><span class='block'><b>Объект: </b>");
        replace("*", "<br/>");
        replace("--", "</span><span class='block'><b>Испытуемый: </b>")
        replace("==", "</span><span class='block'><b>Допрашиваемый: </b>")
        let header = `<div class='header'>
                          <div class='logo'>
                            <a href='../index.html'>
                                <img src='../img/logo.png'>
                            </a>
                            <span>SIT: Search and Isolation of Threats</span>
                          </div>
                        </div>`;
        let links = `<link rel="stylesheet" type="text/css" href="../styles/main.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;500;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
`
        document.getElementById("container").innerHTML = document.getElementById("container").innerHTML.replace("~header", header);
}

