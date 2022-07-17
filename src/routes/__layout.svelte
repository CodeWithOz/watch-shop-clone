<svelte:head>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link href="/global.css" rel="stylesheet">
</svelte:head>

<header>
    <div class="header__icon header__icon__phone"><a href="tel:07987654321">07987654321<img src="/phone.svg" alt="phone"></a></div>
    <div class="header__icon header__icon__hamburger"><img src="/menu-1.svg" alt="hamburger" srcset="menu-1.svg 1x, menu-1@2x.svg 2x"></div>
    <h1>Watch Shop<span class="city">LONDON</span></h1>
    <div class="header__icon header__icon__cart"><img src="/cart.svg" alt="cart"></div>
</header>

<slot></slot>

<style>
    header {
        --iconSize: 1.75rem;
        --outerPad: 1.5rem;
        display: grid;
        grid-template-columns: 1fr max-content 1fr;
        align-items: center;
        padding: var(--outerPad);
        background-color: var(--site-gray-light-1);
    }

    .header__icon:not(.header__icon__phone) {
        width: var(--iconSize);
        height: var(--iconSize);
    }

    .header__icon__hamburger {
        justify-self: flex-start;
    }

    .header__icon__cart {
        justify-self: flex-end;
    }

    .header__icon img {
        width: 100%;
        height: 100%;
    }

    @media (min-width: 420px) {
        .header__icon__hamburger {
            display: none;
        }
    }

    .header__icon__phone {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2em;
    }

    .header__icon__phone a {
        display: grid;
        grid-template-columns: max-content 1fr;
        gap: 10px;
        align-items: center;
    }

    @media (max-width: 419px) {
        .header__icon__phone {
            display: none;
        }
    }

    h1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-weight: 100;
        font-size: 2.5rem;
    }

    h1 span {
        font-size: 1.5rem;
        letter-spacing: 0.3rem;
    }
</style>