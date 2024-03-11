import React, { useEffect, useRef, useState } from "react";

function Canvas() {
  const canvasRef = useRef(null);
  const [context, setContext] = useState(null);
  const colors = ['#ffa8ad', '#6e85a3', '#cfd69b'];
  const mouse = {
    x: document.documentElement.clientWidth / 2,
    y: document.documentElement.clientHeight / 2,
  };

  addEventListener("mousemove", (event) => {
    mouse.x = event.clientX;
    mouse.y = event.pageY;
  });

  function getDistance(x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;

    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
  }

  function rotate(velocity, angle) {
    const rotatedVelocities = {
      x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
      y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle),
    };

    return rotatedVelocities;
  }
  function resolveCollision(particle, otherParticle) {
    const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
    const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

    const xDist = otherParticle.x - particle.x;
    const yDist = otherParticle.y - particle.y;

    // Prevent accidental overlap of particles
    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
      // Grab angle between the two colliding particles
      const angle = -Math.atan2(
        otherParticle.y - particle.y,
        otherParticle.x - particle.x
      );

      // Store mass in var for better readability in collision equation
      const m1 = particle.mass;
      const m2 = otherParticle.mass;

      // Velocity before equation
      const u1 = rotate(particle.velocity, angle);
      const u2 = rotate(otherParticle.velocity, angle);

      // Velocity after 1d collision equation
      const v1 = {
        x: (u1.x * (m1 - m2)) / (m1 + m2) + (u2.x * 2 * m2) / (m1 + m2),
        y: u1.y,
      };
      const v2 = {
        x: (u2.x * (m1 - m2)) / (m1 + m2) + (u1.x * 2 * m2) / (m1 + m2),
        y: u2.y,
      };

      // Final velocity after rotating axis back to original location
      const vFinal1 = rotate(v1, -angle);
      const vFinal2 = rotate(v2, -angle);

      // Swap particle velocities for realistic bounce effect
      particle.velocity.x = vFinal1.x;
      particle.velocity.y = vFinal1.y;

      otherParticle.velocity.x = vFinal2.x;
      otherParticle.velocity.y = vFinal2.y;
    }
  }

  function Particle(x, y, radius, color = "red") {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = {
      x: Math.random() - 0.5,
      y: Math.random() - 0.5,
    };
    this.mass = 1;
    this.update = function (particles) {
      this.draw();
      for (let i = 0; i < particles.length; i++) {
        if (this === particles[i]) {
          continue;
        }
        if (
          getDistance(this.x, this.y, particles[i].x, particles[i].y) -
            this.radius * 2 <
          0
        ) {
          resolveCollision(this, particles[i]);
        }
      }

      if (
        this.x - this.radius <= 0 ||
        this.x + this.radius >= document.documentElement.clientWidth
      ) {
        this.velocity.x = -this.velocity.x;
      }

      if (
        this.y - this.radius <= 0 ||
        this.y + this.radius >= document.body.clientHeight
      ) {
        this.velocity.y = -this.velocity.y;
      }
      this.x += this.velocity.x;
      this.y += this.velocity.y;
    };

    this.draw = function () {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      // context.fillStyle = this.color;
      // context.fill();
      context.lineWidth = 2;
      context.strokeStyle = this.color;
      context.lineCap = "round";
      context.stroke();
      context.closePath();
    };
  }

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.width = document.documentElement.clientWidth;
      canvas.height = document.body.clientHeight;
      const ctx = canvas.getContext("2d");
      setContext(ctx);
    }
  }, []);

  function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let particles;
  function init() {
    particles = [];

    for (let i = 0; i < 20; i++) {
      const radius = 15;
      let x = randomIntFromRange(radius, canvasRef.current.width - radius);
      let y = randomIntFromRange(radius, canvasRef.current.height - radius);
      const color = colors[Math.floor(Math.random()*colors.length)];
      if (i != 0) {
        for (let j = 0; j < particles.length; j++) {
          if (
            getDistance(x, y, particles[j].x, particles[j].y) - radius * 2 <
            0
          ) {
            x = randomIntFromRange(radius, canvasRef.current.width - radius);
            y = randomIntFromRange(radius, canvasRef.current.height - radius);

            j = -1;
          }
        }
      }
      particles.push(new Particle(x, y, radius, color));
    }
    console.log(particles);
  }
  useEffect(() => {
    let animationFrameId;
    if (context) {
      init();

      const animate = () => {
        animationFrameId = window.requestAnimationFrame(animate);
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);

        particles.forEach((particle) => {
          particle.update(particles);
        });
      };
      animate();
    }
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [context, mouse]);

  useEffect(() => {});

  return <canvas className="canvas-page" ref={canvasRef}></canvas>;
}

export default Canvas;
