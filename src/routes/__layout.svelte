<svelte:head>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link href="/global.css" rel="stylesheet">
</svelte:head>

<header>
    <h1>Watch Shop<span class="city">LONDON</span></h1>
</header>

<slot></slot>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>