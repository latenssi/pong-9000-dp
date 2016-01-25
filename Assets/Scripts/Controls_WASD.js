#pragma strict

private var movement : PaddleMovement; 

function Start() {
    movement = GetComponent(PaddleMovement);
}

function FixedUpdate() {

    // Up
    if (Input.GetKey(KeyCode.W) && !Input.GetKey(KeyCode.S)) {
        movement.moveVertical(movement.DISCRETE_UP);
    } 
    // Down
    else if (Input.GetKey(KeyCode.S) && !Input.GetKey(KeyCode.W)) {
        movement.moveVertical(movement.DISCRETE_DOWN);
    }
    // Both or neither pressed
    else {
        movement.moveVertical(movement.DISCRETE_STOP);
    }
    
    // Left
    if (Input.GetKey(KeyCode.A) && !Input.GetKey(KeyCode.D)) {
        movement.moveHorizontal(movement.DISCRETE_LEFT);
    } 
    // Right
    else if (Input.GetKey(KeyCode.D) && !Input.GetKey(KeyCode.A)) {
        movement.moveHorizontal(movement.DISCRETE_RIGHT);
    }
    // Both or neither pressed
    else {
        movement.moveHorizontal(movement.DISCRETE_STOP);
    }
}