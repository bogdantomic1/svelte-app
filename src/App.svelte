<script>
  import { Router, Link, Route } from "svelte-routing";
  import Steps from "./Steps.svelte";
  import Step4 from "./Steps/Step4.svelte";
  export let url = "/";
</script>

<Router {url} useHash={true}>
  <nav>
    <Link to="/" />
  </nav>
  <div>
    <Route path="/"><Steps /></Route>
    <Route path="/thankyou"><Step4 /></Route>
  </div>
</Router>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
