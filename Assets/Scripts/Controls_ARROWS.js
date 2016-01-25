#pragma strict

private var movement : PaddleMovement; 

function Start() {
    movement = GetComponent(PaddleMovement);
}

function FixedUpdate() {
    // Up
    if (Input.GetKey(KeyCode.UpArrow) && !Input.GetKey(KeyCode.DownArrow)) {
        movement.moveVertical(movement.DISCRETE_UP);
    } 
    // Down
    else if (Input.GetKey(KeyCode.DownArrow) && !Input.GetKey(KeyCode.UpArrow)) {
        movement.moveVertical(movement.DISCRETE_DOWN);
    }
    // Both or neither pressed
    else {
        movement.moveVertical(movement.DISCRETE_STOP);
    }
    
    // Left
    if (Input.GetKey(KeyCode.LeftArrow) && !Input.GetKey(KeyCode.RightArrow)) {
        movement.moveHorizontal(movement.DISCRETE_LEFT);
    } 
    // Right
    else if (Input.GetKey(KeyCode.RightArrow) && !Input.GetKey(KeyCode.LeftArrow)) {
        movement.moveHorizontal(movement.DISCRETE_RIGHT);
    }
    // Both or neither pressed
    else {
        movement.moveHorizontal(movement.DISCRETE_STOP);
    }
}