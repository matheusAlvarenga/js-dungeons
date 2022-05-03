export const detectBasicCollision = (playerHitBox, actorHitBox) => {
  if (
    playerHitBox.x + playerHitBox.width > actorHitBox.x &&
    playerHitBox.x - playerHitBox.width < actorHitBox.x + actorHitBox.width &&
    playerHitBox.y + playerHitBox.height > actorHitBox.y &&
    playerHitBox.y - playerHitBox.height < actorHitBox.y + actorHitBox.height
  )
    return true;

  return false;
};
