#pragma strict
var prefabBlock : Transform;
var repeatTimeMax : int;
var repeatTimeMin : int;
private var nextBlock : int;

function Start () {

}

function Update () {
if (Time.time > nextBlock)
	{
	nextBlock = Time.time + Random.Range(repeatTimeMin, repeatTimeMax);
	// CREATE BLOCK AT POSITION Random.Range(-10.0, 10.0)
	Instantiate(prefabBlock, gameObject.transform.position, Quaternion.identity);
	}
}
