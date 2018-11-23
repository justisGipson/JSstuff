doorImage1 = document.getElementById("door1");
doorImage2 = document.getElementById("door2");
doorImage3 = document.getElementById("door3");

botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";

beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";

spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

numClosedDoors = 3;

openDoor1 = ();

openDoor2 = ();

openDoor3 = ();

randomChoreDoorGenerator = () => {
  choreDoor = Math.floor(Math.random() * numClosedDoors);
  if(choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if(choreDoor === 1){
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else {
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
  }
}

door1.onclick = () => {
  doorImage1.src = openDoor1;
}

door2.onclick = () => {
  doorImage2.src = openDoor2;
}

door3.onclick = () => {
  doorImage3.src = openDoor3;
}

randomChoreDoorGenerator();