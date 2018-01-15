float xi = 0.1,
  yi = 0,
  zi = 0,
  h = 0.007,
  a = 10,
  b = 28,
  c = (8/3),
  xn,
  yn,
  zn;
double ext = 50;

int siz = 1600,
  iit = 100,
  it = 100000,
  count = 0;

double trans = (double)siz/2;

float[] xl = new float[it];
float[] yl = new float[it];
float[] zl = new float[it];

float rotation=PI;

void setup() {
  size(500, 200, OPENGL);
  stroke(0);
  noFill();
  stroke(0);
  sphereDetail(3);
}

void draw() {

  background(0,0);
  float orbitRadius= 1500;
  float ypos= (float)trans;
  float xpos= cos(radians(rotation))*orbitRadius + (float)trans;
  float zpos= sin(radians(rotation))*orbitRadius + (float)trans;

  camera(xpos, ypos, zpos, (float)trans, (float)trans, (float)trans, 0, -1, 0);


  if (count < it) {
    xn = xi + h * a * (yi - xi);
    yn = yi + h * (xi * (b - zi) - yi);
    zn = zi + h * (xi * yi - c * zi);

    xi= xn;
    yi= yn;
    zi= zn;

    xl[count]  = xi;
    yl[count]  = yi;
    zl[count]  = zi;

    count++;
    sph(xi, yi, zi);
  }

  beginShape();
  for (int i = 0; i < count; i++) {

    vert(xl[i], yl[i], zl[i]);
  }
  endShape();

  rotation += 0.03;
}

void vert(double x, double y, double z) {
  x /= ext;
  y /= ext;
  z /= ext;

  x *= trans;
  y *= trans;
  z *= trans;

  vertex((float)(x + trans), (float)(y + trans), (float)(z + trans));
}

void sph (double x, double y, double z) {

  x /= ext;
  y /= ext;
  z /= ext;

  x *= trans;
  y *= trans;
  z *= trans;

  noStroke();
  fill(0);
  translate((float)(x + trans), (float)(y + trans), (float)(z + trans));
  sphere(10);

  stroke(0);
  noFill();
  translate(-(float)(x + trans), -(float)(y + trans), -(float)(z + trans));
}
