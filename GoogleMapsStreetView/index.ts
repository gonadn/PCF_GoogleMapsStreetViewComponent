import {IInputs, IOutputs} from "./generated/ManifestTypes";
import DataSetInterfaces = ComponentFramework.PropertyHelper.DataSetApi;
type DataSet = ComponentFramework.PropertyTypes.DataSet;
import * as $ from "jquery";
declare const Xrm: any;
interface mapOptions {
    zoom: number;
    scrollwheel: boolean;
    center?: google.maps.LatLng; 
}

export class GoogleMapsStreetView implements ComponentFramework.StandardControl<IInputs, IOutputs> {

	private _context: ComponentFramework.Context<IInputs>;
	private _container: HTMLDivElement;
	private _refreshData: EventListenerOrEventListenerObject;
	private MAPS_API_KEY: string = "";
	private _notifyOutputChanged: () => void;
	private _htmlDivElement: HTMLDivElement;
	private _mapDiv: HTMLDivElement;
	private _pano: HTMLDivElement;
	private mapCanvas: any;
	private panoCanvas: any;
	private panorama: any;
	private gMap: google.maps.Map;
	private markerClusterer: any;
	public mapOptions: mapOptions;
	public markers: any = [];

	constructor(public container: HTMLDivElement) {
	}

	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement)
	{		
		this._context = context;
		this._container = document.createElement("div");		
		this._notifyOutputChanged = notifyOutputChanged;

		$( document ).ready(() => {
			this.addGoogleScriptToHeader(this._context);
			
			this._pano = document.createElement("div");
			this._pano.setAttribute("id", "pano");
			this._pano.setAttribute("style", "position:relative;width:100%;height:80vh;border-style: solid;margin:auto;");
			this._container.appendChild(this._pano);
			
			//Associate controls to container
			container.appendChild(this._container);
		});
	}

	public initMap() {	
		if(google !== null && google !== undefined) {
			console.log('init pano map');
			this.panoCanvas = document.getElementById('pano');
			if (this.panoCanvas !== null && this.panoCanvas !== undefined){
				const fenway = {lat: 42.345573, lng: -71.098326};
				const mapOptions = {
					zoom: 14,
					center: fenway,
				}	
				
				this.gMap = new google.maps.Map(this.panoCanvas, mapOptions);
				this.panorama = new google.maps.StreetViewPanorama(
					this.panoCanvas, {
					  position: fenway,
					  pov: {
						heading: 34,
						pitch: 10
					  }
					});
				this.gMap.setStreetView(this.panorama);
			}
		}
	}

	public getCurrentLocation() {
		const self = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                // const pos = {
                //     lat: position.coords.latitude,
                //     lng: position.coords.longitude
				// };
				const pos = {
                    lat: 37.090240,
                    lng: -95.712891
                };
                self.gMap.setCenter(pos);
				self.mapOptions.center = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            }, function () {
                //handleLocationError(true, infoWindow, map.getCenter());
                //do nothing because we have set the center as 0 0 as a backup
			});			
        }
	}

	public addGoogleScriptToHeader(context: any): void {
		//const apiKey = context.parameters.googleMapsAPIKey.raw != null && context.parameters.googleMapsAPIKey.raw != "val" ? context.parameters.googleMapsAPIKey.raw : "";
		let headerScript: HTMLScriptElement = document.createElement("script");
        headerScript.type = 'text/javascript';
        headerScript.id = "GoogleHeaderScript";
		//headerScript.src = "https://maps.googleapis.com/maps/api/js?key=" + this.MAPS_API_KEY;
		headerScript.src = "https://maps.googleapis.com/maps/api/js?key=" + apiKey;
		headerScript.onload = this.initMap;
        document.body.appendChild(headerScript);
	}

	public updateView(context: ComponentFramework.Context<IInputs>): void
	{
		console.log("update view called");
		$( document ).ready(() => {
			setTimeout(() => {
				// const dt = Xrm.Page.data.entity;
				// console.log(dt);

				this.initMap();
				//this.getCurrentLocation();
			}, 500);			
		});
	}
	
    public openRecord(context: ComponentFramework.Context<IInputs>, recName: string, recType: string, recId: string): void {
        let entityFormOptions = {
            entityName: recType,
            entityId: recId,
        }
        // context.parameters.mapDataSet.openDatasetItem(recordRef);
        context.navigation.openForm(entityFormOptions);
        //the other option is to build a url using context.page.appId?
    }

	public getOutputs(): IOutputs
	{
		return {};
	}

	public destroy(): void
	{
		// Add code to cleanup control if necessary
	}
}