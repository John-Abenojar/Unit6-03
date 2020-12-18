var age = prompt("How old are you?");
if (age >= 17) {
  alert ("you can see R rated movies alone");
}
else if (age >= 13) {
  alert("you can see rated PG-13 movies alone");
}
else if (age >= 5) {
  alert ("you can see rated G or PG movies alone")
}
else {
  alert("you are too young for these movies")
}