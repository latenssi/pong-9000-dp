#pragma strict

public var minimumVelocity : int;
public var maximumVelocity : int;
public var paddleForce : int;

private var rb : Rigidbody;

function Start() {
    rb = GetComponent(Rigidbody);

    // GIVE SOME STARTING SPEED
    rb.velocity.x = minimumVelocity;
}

function FixedUpdate() {
    var velX = rb.velocity.x;
    var velY = rb.velocity.y;

    var mag = rb.velocity.magnitude;
    var norm = rb.velocity.normalized;

    if (mag < minimumVelocity)
        rb.velocity = norm * minimumVelocity;

    if (mag > maximumVelocity)
        rb.velocity = norm * maximumVelocity;

    if (velX == 0)
        rb.velocity.x = (norm * maximumVelocity).x;

    if (velY == 0)
        rb.velocity.y = (norm * maximumVelocity).y;
}

function OnCollisionEnter(collision: Collision) {
	if (collision.gameObject.tag == 'Player') {
    var pVel = collision.rigidbody.velocity;
    if (pVel.magnitude > 1) {
      rb.AddForce(pVel * paddleForce);
    }
  }
}
