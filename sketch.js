var iss, issImg;
var bgImg;
var spaceCraft, spaceCraft1, spaceCraft2, spaceCraft3, spaceCraft4;
var isDocked = false;
var area;

function preload()
{
	issImg = loadImage("iss.png");
	bgImg = loadImage("spacebg.jpg");
	spaceCraft1 = loadImage("spacecraft1.png");
	spaceCraft2 = loadImage("spacecraft2.png");
	spaceCraft3 = loadImage("spacecraft3.png");
	spaceCraft4 = loadImage("spacecraft4.png");
}

function setup()
{
	createCanvas(800, 600);

	iss = createSprite(400, 200, 50, 50);
	iss.addImage("ISS", issImg);
	iss.scale = 0.9;

	area = createSprite(365, 225, 50, 10);
	area.visible = false;

	spaceCraft = createSprite(400, 550, 10, 10);
	spaceCraft.addImage("still", spaceCraft1);
	spaceCraft.addImage("upward", spaceCraft2);
	spaceCraft.addImage("left", spaceCraft3);
	spaceCraft.addImage("right", spaceCraft4);
	spaceCraft.changeImage("still");
	spaceCraft.scale = 0.2;
	spaceCraft.x = Math.round(random(50, 750));
}

function draw()
{
	background(bgImg);

	if (!isDocked)
	{

		if (keyDown(LEFT_ARROW))
		{
			spaceCraft.x -= 3;
			spaceCraft.changeImage("right");
		}

		if (keyDown(RIGHT_ARROW))
		{
			spaceCraft.x += 3;
			spaceCraft.changeImage("left");
		}

		if (keyDown(DOWN_ARROW))
		{
			spaceCraft.y += 1;
			spaceCraft.changeImage("upward");
		}

		if (keyDown(UP_ARROW))
		{
			spaceCraft.y -= 3;
			spaceCraft.changeImage("upward");
		}
		
	}

	if (spaceCraft.isTouching(area))
	{
		isDocked = true;
	}

	if (isDocked)
	{
		spaceCraft.changeImage("still");
		console.log(spaceCraft.y)
		spaceCraft.y = 280;
		textSize(30);
		fill("white");
		text("You have Docked the Shuttle!", 200, 400);
	}
	drawSprites();
}