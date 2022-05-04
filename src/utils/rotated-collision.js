export const sin = (x) => Math.sin((x / 180) * Math.PI);

export const cos = (x) => Math.cos((x / 180) * Math.PI);

export const getCenter = (hitbox) => ({
  x: hitbox.x + hitbox.width / 2,
  y: hitbox.y + hitbox.height / 2,
});

export const getVector = (hitbox) => ({
  x: hitbox.x - hitbox.x + hitbox.width / 2,
  y: hitbox.y - hitbox.y + hitbox.height / 2,
});

export const getVectorLength = (hitbox) => {
  const vector = getVector(hitbox);
  return Math.sqrt(vector.x ** 2 + vector.y ** 2);
};

export const getRotatedTopLeftCorner = ({ hitbox, rotation }) => {
  const center = getCenter(hitbox);
  const vector = getVector(hitbox);

  const rotMatrix = [
    [cos(rotation), -sin(rotation)],
    [sin(rotation), cos(rotation)],
  ];

  const rotatedVector = {
    x: vector.x * rotMatrix[0][0] + vector.y * rotMatrix[0][1],
    y: vector.x * rotMatrix[1][0] + vector.y * rotMatrix[1][1],
  };

  return {
    x: center.x + rotatedVector.x,
    y: center.y + rotatedVector.y,
  };
};

export const pointInside = ({ verties, x, y }) => {
  let result = false;

  let i;
  let j;

  const vertieNumber = verties.length;

  // eslint-disable-next-line no-plusplus
  for (i = 0, j = vertieNumber - 1; i < vertieNumber; j = i++) {
    if (
      verties[i].y > y !== verties[j].y > y &&
      x <
        ((verties[j].x - verties[i].x) * (y - verties[i].y)) /
          (verties[j].y - verties[i].y) +
          verties[i].x
    )
      result = !result;
  }

  return result;
};

export const getAngleForNextCorner = (centerX, vectorLength) =>
  180 - Math.acos(centerX / vectorLength) * (180 / Math.PI) * 2;

export const testCollision = (corners1, corners2) => {
  let collision = false;

  corners1.forEach((corner) => {
    if (pointInside({ verties: corners2, x: corner.x, y: corner.y }))
      collision = true;
  });

  return collision;
};

export const checkFullCollision = (corners1, corners2) => {
  if (testCollision(corners1, corners2)) return true;
  if (testCollision(corners2, corners1)) return true;
  return false;
};
