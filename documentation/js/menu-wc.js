'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">summer documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-d9b7b4b8cc98eb07c6338b49e6c35e3f"' : 'data-target="#xs-components-links-module-AppModule-d9b7b4b8cc98eb07c6338b49e6c35e3f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-d9b7b4b8cc98eb07c6338b49e6c35e3f"' :
                                            'id="xs-components-links-module-AppModule-d9b7b4b8cc98eb07c6338b49e6c35e3f"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BetaPlayCanzoneComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BetaPlayCanzoneComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DettaglioComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DettaglioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ImageUploadComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ImageUploadComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AppModule-d9b7b4b8cc98eb07c6338b49e6c35e3f"' : 'data-target="#xs-directives-links-module-AppModule-d9b7b4b8cc98eb07c6338b49e6c35e3f"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AppModule-d9b7b4b8cc98eb07c6338b49e6c35e3f"' :
                                        'id="xs-directives-links-module-AppModule-d9b7b4b8cc98eb07c6338b49e6c35e3f"' }>
                                        <li class="link">
                                            <a href="directives/HighlightDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">HighlightDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CardsModule.html" data-type="entity-link">CardsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CardsModule-a5ba0510c939178af4f897063c3c51ff"' : 'data-target="#xs-components-links-module-CardsModule-a5ba0510c939178af4f897063c3c51ff"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CardsModule-a5ba0510c939178af4f897063c3c51ff"' :
                                            'id="xs-components-links-module-CardsModule-a5ba0510c939178af4f897063c3c51ff"' }>
                                            <li class="link">
                                                <a href="components/CardsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CardsRoutingModule.html" data-type="entity-link">CardsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FeedbackModule.html" data-type="entity-link">FeedbackModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FeedbackModule-1cbc7de658e6455ca3b88c745be14afc"' : 'data-target="#xs-components-links-module-FeedbackModule-1cbc7de658e6455ca3b88c745be14afc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FeedbackModule-1cbc7de658e6455ca3b88c745be14afc"' :
                                            'id="xs-components-links-module-FeedbackModule-1cbc7de658e6455ca3b88c745be14afc"' }>
                                            <li class="link">
                                                <a href="components/FeedbackComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FeedbackComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FeedbackRoutingModule.html" data-type="entity-link">FeedbackRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-50330e0c58c7ec0c752612524624bb48"' : 'data-target="#xs-components-links-module-HomeModule-50330e0c58c7ec0c752612524624bb48"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-50330e0c58c7ec0c752612524624bb48"' :
                                            'id="xs-components-links-module-HomeModule-50330e0c58c7ec0c752612524624bb48"' }>
                                            <li class="link">
                                                <a href="components/CaroselloComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CaroselloComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link">HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link">LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-98b5a98452c764c4794b3fdb787a4952"' : 'data-target="#xs-components-links-module-LoginModule-98b5a98452c764c4794b3fdb787a4952"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-98b5a98452c764c4794b3fdb787a4952"' :
                                            'id="xs-components-links-module-LoginModule-98b5a98452c764c4794b3fdb787a4952"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginRoutingModule.html" data-type="entity-link">LoginRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProfiloModule.html" data-type="entity-link">ProfiloModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProfiloModule-62ccbdc4819717949d5df88e8a15c0ad"' : 'data-target="#xs-components-links-module-ProfiloModule-62ccbdc4819717949d5df88e8a15c0ad"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfiloModule-62ccbdc4819717949d5df88e8a15c0ad"' :
                                            'id="xs-components-links-module-ProfiloModule-62ccbdc4819717949d5df88e8a15c0ad"' }>
                                            <li class="link">
                                                <a href="components/ProfiloComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfiloComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfiloRoutingModule.html" data-type="entity-link">ProfiloRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RegistrazioneModule.html" data-type="entity-link">RegistrazioneModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RegistrazioneModule-e44f60c5756dd10be6fd02dfe33e288c"' : 'data-target="#xs-components-links-module-RegistrazioneModule-e44f60c5756dd10be6fd02dfe33e288c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RegistrazioneModule-e44f60c5756dd10be6fd02dfe33e288c"' :
                                            'id="xs-components-links-module-RegistrazioneModule-e44f60c5756dd10be6fd02dfe33e288c"' }>
                                            <li class="link">
                                                <a href="components/RegistrazioneComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegistrazioneComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RegistrazioneRoutingModule.html" data-type="entity-link">RegistrazioneRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-7afa07a9124d9967f83fe4534ef6f757"' : 'data-target="#xs-components-links-module-SharedModule-7afa07a9124d9967f83fe4534ef6f757"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-7afa07a9124d9967f83fe4534ef6f757"' :
                                            'id="xs-components-links-module-SharedModule-7afa07a9124d9967f83fe4534ef6f757"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/ImageSnippet.html" data-type="entity-link">ImageSnippet</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ComunicazioneService.html" data-type="entity-link">ComunicazioneService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ImageService.html" data-type="entity-link">ImageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginService.html" data-type="entity-link">LoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MyHttpService.html" data-type="entity-link">MyHttpService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RouterService.html" data-type="entity-link">RouterService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/EditGuardService.html" data-type="entity-link">EditGuardService</a>
                            </li>
                            <li class="link">
                                <a href="guards/GuardService.html" data-type="entity-link">GuardService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ListItem.html" data-type="entity-link">ListItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MenuItem.html" data-type="entity-link">MenuItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserItem.html" data-type="entity-link">UserItem</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});