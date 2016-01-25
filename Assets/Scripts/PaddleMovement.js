#pragma strict

public static var DISCRETE_UP : float = 1;
public static var DISCRETE_DOWN : float = -1;
public static var DISCRETE_LEFT : float = -1;
public static var DISCRETE_RIGHT : float = 1;
public static var DISCRETE_STOP  : float = 0;

public var baseSpeed : int;

private var speed : int;
private var rb : Rigidbody;
private var vertical : int;
private var horizontal : int;

function Start() {
    speed = baseSpeed;
    vertical = 0;
    horizontal = 0;
    rb = GetComponent(Rigidbody);
}

function FixedUpdate() {
    rb.velocity.y = vertical * speed;
    rb.velocity.x = horizontal * speed;
}

function setSpeed(newSpeed : int) {
    speed = newSpeed;
}

function getSpeed() {
    return speed;
}

function moveVertical(direction : float) {
    vertical = direction;
}

function moveHorizontal(direction : float) {
    horizontal = direction;
}
