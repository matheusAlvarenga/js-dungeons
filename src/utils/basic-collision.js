export const detectBasicCollision = (playerHitBox, actorHitBox) => {
  if (
    playerHitBox.x + playerHitBox.width > actorHitBox.x &&
    playerHitBox.x < actorHitBox.x + actorHitBox.width &&
    playerHitBox.y + playerHitBox.height > actorHitBox.y &&
    playerHitBox.y < actorHitBox.y + actorHitBox.height
  )
    return true;

  return false;
};
