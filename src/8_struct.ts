type User = {id: number}
type Product = {id: number}

let user: User = {id: 1}
let product: Product = {id: 2}

user = product
product = user

type Point2D = {x: number, y: number}
type Point3D = {x: number, y:number, z: number}

let point2D: Point2D = {x: 1, y: 2}
let point3D: Point3D = {x:1, y:2, z:3}

function simplifyPoint2D(point2D: Point2D): number {
    return point2D.x + point2D.y
}

function simplifyPoint3D(point3D: Point3D): number {
    return point3D.x + point3D.y + point3D.z
}

simplifyPoint2D(point2D)
simplifyPoint2D(point3D)

//simplifyPoint3D(point2D) Throws error.
simplifyPoint3D(point3D)