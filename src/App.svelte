<script>
	import { Router, Link, Route } from "svelte-routing";
  import Steps from "./Steps.svelte"
	export let url = "/";

</script>


<Router {url}>
	<nav>
		<Link to="/" />
  </nav> 
  <div>
		<Route path="/"><Steps /></Route>
	</div>
</Router>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
