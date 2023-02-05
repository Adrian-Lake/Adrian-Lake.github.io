let mandelbrot = p =>{

    let CanvasCharRes = {x: 80},
        charSize = {ratio: 1.07},
        mandelOffset = {x:-4.596222e-1, y:5.702460e-1}
        mandelZoom = 50000,
        mandelIterLimit = 100;

    let getTargetDim = () => {
        let canvasContainer = p.canvas.parentElement.parentElement
        return [canvasContainer.clientWidth, canvasContainer.clientHeight];
    }

    p.setup = () => {
        [width, height] = getTargetDim();
        p.createCanvas(width, height);

        p.windowResized(); // all funcs to resize drawing

        p.noStroke();
        p.frameRate(30);

        console.log(p);

        p.textSize(36);
    }

    p.windowResized = () => {
        [width, height] = getTargetDim();
        p.resizeCanvas(width, height);

        charSize.x = Math.ceil(width/CanvasCharRes.x);
        charSize.y = Math.ceil(charSize.x*charSize.ratio);
        CanvasCharRes.y = Math.ceil(height/charSize.y);

    }

    let findMandelLimit = (x, y, practicalInf) => {
        let zr = x, zi = y, n = 0;
        while(n < mandelIterLimit){

            let zr2 = Math.pow(zr, 2), zi2 = Math.pow(zi, 2);

            [zr, zi] = [zr2 - zi2 + x, 2*zr*zi + y];
            // console.log(x, y, zr, zi, n);
            // return n;

            if(zr2 + zi2 > practicalInf)
                break
            

            n++;
        }
        
        return n;
    }


    p.draw = () => {

        p.background(255);

        let frame = p.millis()/50000;

        if(frame <= 1.0){
            mandelZoom = 1 + 5000*frame*frame;
            mandelIterLimit = 50
        }else{
            p.noLoop();
        }
        

        let minVal = Infinity, maxVal = -Infinity;
        let outputBuffer = Array(CanvasCharRes.y).fill(0).map((_, yi) => 
            Array(CanvasCharRes.x).fill(0).map((_, xi) => {

                // let val = Math.floor(Math.random()*10);

                let x =  (xi - CanvasCharRes.x/2)/mandelZoom + mandelOffset.x;
                let y =  charSize.ratio*(yi - CanvasCharRes.y/2)/mandelZoom  + mandelOffset.y;
                let val = findMandelLimit(x, y, 10);
                minVal = Math.min(minVal, val);
                // minVal = 0;
                maxVal = Math.max(maxVal, val);
                // maxVal = mandelIterLimit;
                return val;
            
            })
        )

        outputBuffer.forEach((row, yi) =>{
            row.forEach((val, xi) =>{

                let scaled_val = (val - minVal)/(maxVal - minVal);
                p.fill(255*scaled_val);

                p.rect(
                charSize.x*xi, 
                charSize.y*yi, 
                charSize.x, 
                charSize.y);

                // p.fill(255*(1-scaled_val));
                // p.text("" + Math.round(scaled_val*9), charSize.x*xi, charSize.y*yi);

            })
        })
    }
}

