﻿#pragma strict

function OnCollisionEnter(collision: Collision) {
	if (collision.gameObject.tag == 'Ball')
		Destroy(gameObject, 0);
}
