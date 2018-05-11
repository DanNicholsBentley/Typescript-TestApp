import { Point } from './Geometry/Point'
import { Vector } from './Geometry/Vector';
import { Line } from './Graphics/Line';
import { Circle } from './Graphics/Circle';

import { ModelComponent } from './Model/ModelComponent';
import { Model } from './Model/Model';

let p1: Point = new Point(1,2,3);
console.log(p1.Print("p1:"));

let p2: Point = <Point>p1.Offset(2,3,4);
console.log(p2.Print("p2:"));

let p3: Point = p2.Add(p1);
console.log(p3.Print("p3:"));

let p4: Point = p3.Subtract(p1);
console.log(p4.Print("p4:"));

let v1 = new Vector(0,0,1);
console.log(v1.Print("v1:"));

let l1 = new Line(new Point(0,0,0), new Point(1,0,0));
console.log(l1.Print("l1:"));

let c1 = new Circle(l1.MidPoint, l1.Length * 0.25);
console.log(c1.Print("c1:"));

let comp1: ModelComponent = new ModelComponent("comp1");
comp1.AddGraphicalElement(l1);
comp1.AddGraphicalElement(c1);
console.log(comp1.Print());

let l2 = new Line(new Point(0,1,0), new Point(1,1,0));
console.log(l2.Print("l2:"));


let comp2: ModelComponent = new ModelComponent("comp2");
comp2.AddGraphicalElement(l2);
console.log(comp2.Print());

let model = new Model("MyModel");
model.AddModelComponent(comp1);
model.AddModelComponent(comp2);
console.log(model.Print());