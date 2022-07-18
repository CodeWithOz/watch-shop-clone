<script>
    import LanguageSelector from '$lib/HeaderComponents/languageSelector.svelte';
    let searching = false;
    /**
     * @type {Number}
     */
    let viewportWidth;
    // TODO: get the breakpoints from the store
    const viewportDims = { width: 420, height: 820 };
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link href="/global.css" rel="stylesheet">
</svelte:head>

<svelte:window bind:innerWidth={viewportWidth}/>

<header>
    {#if viewportWidth > viewportDims.width}
        <section class="header__languageSelector__container">
            <LanguageSelector />
        </section>
    {/if}
    <section class="header__main">
        <div class="header__icon header__icon__phone"><a href="tel:07987654321">07987654321<img src="/phone.svg" alt="phone"></a></div>
        <div class="header__icon header__icon__hamburger"><img src="/menu-1.svg" alt="hamburger" srcset="menu-1.svg 1x, menu-1@2x.svg 2x"></div>
        <h1>Watch Shop<span class="city">LONDON</span></h1>
        <div class="rightSideIcons__container {searching ? 'searching' : ''}">
            <div class="header__icon header__icon__search" on:click|preventDefault={() => searching = !searching}><img src="/search.svg" alt="search"></div>
            <div class="header__searchBox"><input type="search" placeholder="search"></div>
            <div class="header__icon header__icon__heart"><img src="/heart.svg" alt="heart"></div>
            <div class="header__icon header__icon__account"><img src="/account.svg" alt="account"></div>
            <div class="header__icon header__icon__cart"><img src="/cart.svg" alt="cart"></div>
        </div>
    </section>
</header>

<slot></slot>

<style>
    header {
        --iconSize: 1.75rem;
        --outerPad: 1.5rem;
        --outerPadLg: 5rem;
        --headerPhoneFontSize: 20px;
        --headerPhoneLineHeight: 26px;
        --borderRadius: 8px;
        --borderRadiusLg: 17px;
    }

    .header__main {
        display: grid;
        grid-template-columns: 1fr max-content 1fr;
        grid-template-rows: 1fr;
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

    .header__icon__phone {
        display: flex;
        align-items: center;
        padding: 2em;
    }

    .header__icon__phone a {
        display: grid;
        grid-template-columns: max-content 1fr;
        gap: 10px;
        align-items: center;
        text-decoration: none;
        font-size: var(--headerPhoneFontSize);
        line-height: var(--headerPhoneLineHeight);
    }

    .header__icon__phone a:visited {
        text-decoration: none;
    }

    .rightSideIcons__container {
        display: flex;
        justify-content: flex-end;
    }
    .rightSideIcons__container > *:not(.header__icon__cart) {
        display: none;
    }

    .header__searchBox input {
        border-radius: var(--borderRadius);
    }

    .header__searchBox input::placeholder {
        color: var(--site-gray-dark);
        opacity: 0.33;
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

    @media (min-width: 420px) {
        .header__main {
            padding: var(--outerPad) var(--outerPadLg);
        }

        .header__icon__hamburger {
            display: none;
        }

        .rightSideIcons__container {
            display: grid;
            grid-template-areas: "search heart account cart";
            grid-template-rows: 1fr;
            gap: 10px;
            align-items: center;
            max-width: 600px;
            justify-self: flex-end;
        }

        .rightSideIcons__container.searching {
            grid-template-areas: "search searchBox searchBox searchBox searchBox searchBox heart account cart";
        }

        .rightSideIcons__container > *:not(.header__icon__cart) {
            display: unset;
        }

        .rightSideIcons__container .header__icon {
            display: flex;
            justify-self: center;
            justify-content: center;
            align-items: center;
        }

        .rightSideIcons__container .header__icon__search {
            grid-area: search;
        }

        .rightSideIcons__container .header__searchBox {
            display: none;
        }

        .rightSideIcons__container.searching .header__searchBox {
            display: unset;
            grid-area: searchBox;
        }

        .rightSideIcons__container .header__searchBox input {
            width: 100%;
        }

        .rightSideIcons__container .header__icon__heart {
            grid-area: heart;
        }

        .rightSideIcons__container .header__icon__account {
            grid-area: account;
        }

        .rightSideIcons__container .header__icon__cart {
            grid-area: cart;
        }

        .header__searchBox input {
            border-radius: var(--borderRadiusLg);
        }
    }

    @media (max-width: 419px) {
        .header__icon__phone {
            display: none;
        }
    }
</style>