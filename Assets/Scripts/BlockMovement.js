#pragma strict
var destroyDelay : int;
var downSpeed : float;

function Start () {
  Destroy(gameObject, destroyDelay);
}

function Update () {
  gameObject.transform.position.y -= downSpeed;
}
