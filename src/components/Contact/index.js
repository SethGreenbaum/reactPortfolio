import React from "react";
import "./style.css";
import Resume from "../documents/smgresume.pdf"

/**
  1. /contact/learn displays all of the same content as the /contact route, 
  but also displays another nested component.

  2. Any component we render using the Route component (such as this Contact component) 
  is automatically passed a match prop object containing information about the Route 
  component that rendered it. We can access props.match.url to get the path which rendered this route.

  3. Using props.match.url might be a good idea as opposed to just hard coding /contact/learn 
  into the path prop (which would also work). This way if we update a route higher up in our application, 
  we don't need to update all of the other nested route path props
*/

function Contact(props) {
  return (
    <div class="container">
    <div class="row">
        <div class="col mb-4 border-0 shadow my-5">
          <div class="list-group">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">CONTACT ME:</h5>
                <small></small>
              </div>
              <p class="mb-1"></p>
              <small></small>
            </div>
            <a href="mailto:sethmgreenbaum@gmail.com" class="list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">sethmgreenbaum@gmail.com</h5>
                <small class="text-muted"></small>
              </div>
              <p class="mb-1"></p>
              <small class="text-muted"></small>
            </a>
            <a href="https://www.linkedin.com/in/seth-greenbaum-508a0579" class="list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">LINKED-IN</h5>
                <small class="text-muted"></small>
              </div>
              <p class="mb-1"></p>
              <small class="text-muted"></small>
            </a>
            <a href="https://github.com/SethGreenbaum" class="list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">GITHUB</h5>
                <small class="text-muted"></small>
              </div>
              <p class="mb-1"></p>
              <small class="text-muted"></small>
            </a>
            <a href={Resume} class="list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">SEE MY RESUME (PDF)</h5>
                <small class="text-muted"></small>
              </div>
              <p class="mb-1"></p>
              <small class="text-muted"></small>
            </a>
          </div>
    </div>
</div>
  );
}

export default Contact;
