# BellyButtonBiodiversity Challenge

* Creating a visualization dashboard website using visualizations obtained from the Latitude vs Weather project. 
* In building this dashboard, individual pages were created for each plot and a means by which to navigate between them. These pages will contain the visualizations and their corresponding explanations. The site will also inlcude a summary landing page, a comparison page of all of the plots and a page to view the data used to build them.

## Link to site:
* https://jmacprod.github.io/BellyButtonBiodiversity/index.html

## Status
* Project is finalised

## Technologies:
* Visual studio code - build basic structure and content of the site in html 
* Bootstrap 4.3.1 - establish overall responsive CCS framwork and style elemements
* ccs style sheet - utilised to create media queries and to style some smaller specific elements
* Python - version 3.6 Jupyter Notebok - read in existing csv dataset and covert to html table 
* Github pages - publish site

## Navigating the repository:
### Directory: WebVisualizations
* Contains following files:
    * index.html
    * plotCloud.html
    * plotHumid.html
    * plotTemp.html
    * plotWind.html
    * Comparison.html
    * Data.html
    
#### Sub-directory: assets
* style.css
* citiesweather.html - output via Python Jupyter Notebok
    
#### Sub-directory: Resources
* CitiesWeather.csv - output from Latitude vs Weather project
* Reading CSV Exporting HTML.ipynb

#### Sub-directory: Visualizations
* Lat_vs_Cloud.png
* Lat_vs_Humid.png
* Lat_vs_Temp.png
* Lat_vs_Wind.png
    
## Resources
* https://www.codeproject.com/Questions/5276179/Bootstrap-dropdown-menu-not-visible
    * Assisted in resolving issue with Bootstrap drop down menu not responding.
    
* https://www.geeksforgeeks.org/how-to-align-navbar-items-to-the-right-in-bootstrap-4/
    * Solution for alligning navigation menu to the right

*  https://getbootstrap.com/docs/4.3/content/tables/#responsive-tables

* (https://pandas.pydata.org/pandas-docs/version/0.17.0/generated/pandas.DataFrame.to_html.html)

## Notes
* Navigation menu
    * Appears on every page
    * Has the name of the site on the left of the nav which allows users to return to the landing page from any page.
    * Contains a dropdown menu on the right of the navbar named "Plots" that provides a link to each individual visualization page.
    * Provides two more text links on the right: "Comparisons," which links to the comparisons page, and "Data," which links to the data page.
    * Uses a Bootstrap grid - responsive to browser width
        * The nav bar converts to a button as the browser width is reduced
    * Is responsive using media queries.        
        * Background color of nav bar change.


* Landing page
    * An explanation of the project.
    * Sidebar containing preview images of each plot
    * Image linked to relevant visualization page 
    * Uses a Bootstrap grid - responsive to browser width

* Four visualization pages, each with:
    * A descriptive title and heading tag.
    * The plot/visualization for the selected comparison.
        * Re-worked the png visualisations for this project to add further style settings to the plots.
    * A paragraph describing the plot and its significance - edited from original project
    * Uses a Bootstrap grid - responsive to browser width

* A comparisons page that:
    * Contains all of the visualizations on the same page to allow visually comparison
    * Uses a Bootstrap grid - responsive to browser width
    * Each visualistation links to relevant page

* A data page that:
    * Displays a responsive table containing the data used in the visualizations.
    * Uses the bootstrap table component - with some smaller style setting on style.css
    * Data comes from exporting the .csv file as HTML in new Pandas Jupyter Notebook.
   
## Contact
Created by https://github.com/jMacProd - feel free to contact me!
