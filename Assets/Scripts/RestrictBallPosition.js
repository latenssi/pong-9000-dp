#pragma strict

public var maxX : float;
public var maxY : float;

private var rb : Rigidbody;

function Start() {
  rb = GetComponent(Rigidbody);
}

function FixedUpdate () {
  var positionX = transform.position.x;
  var positionY = transform.position.y;

  if (Mathf.Abs(positionX) >= maxX) {
    Debug.Log("OVER BOARD");
    rb.velocity.x = rb.velocity.x * -1;
  }

  if (Mathf.Abs(positionY) >= maxY) {
    Debug.Log("OVER BOARD");
    rb.velocity.y = rb.velocity.y * -1;
  }
}
