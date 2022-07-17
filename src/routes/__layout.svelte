<svelte:head>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link href="/global.css" rel="stylesheet">
</svelte:head>

<header>
    <div class="header__icon"><img src="/menu-1.svg" alt="hamburger" srcset="menu-1.svg 1x, menu-1@2x.svg 2x"></div>
    <h1>Watch Shop<span class="city">LONDON</span></h1>
    <div class="header__icon"><img src="/cart.svg" alt="cart"></div>
</header>

<slot></slot>

<style>
    header {
        --iconSize: 1.75rem;
        --outerPad: 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--outerPad);
    }

    .header__icon {
        width: var(--iconSize);
        height: var(--iconSize);
    }

    .header__icon img {
        width: 100%;
        height: 100%;
    }

    h1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-weight: 100;
    }
</style>