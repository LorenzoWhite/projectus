//
//  SCKShareUploadOperation.h
//  SketchCloudKit
//
//  Created by Robin Speijer on 18-07-17.
//  Copyright © 2017 Awkward. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "SCKOperation.h"

@class SCKShareAPIRequest;
@class SCKShareUploadOperation;
@class SCKShare;

/**
 A data source that provides all required data for uploading a Cloud Share appropriately.
 */
@protocol SCKShareUploadDataSource <NSObject>

/**
 Request for the local fileURL for the item that needs to be uploaded with the given hash.

 @param operation The upload operation that needs the fileURL
 @param hash The file hash of the file to be uploaded
 @return A valid fileURL, or nil if some rare error has occured and the file could not be uploaded anymore.
 */
- (nullable NSURL *)shareUploadOperation:(nonnull SCKShareUploadOperation *)operation fileURLForItemWithHash:(nonnull NSString *)hash;

/**
 The file URL of the document file that needs to be uploaded to Cloud.

 @param operation The upload operation that needs the fileURL
 @return A valid fileURL, or nil if the document file does not exist (anymore).
 */
- (nullable NSURL *)documentFileURLForShareUploadOperation:(nonnull SCKShareUploadOperation *)operation;

@end

NS_ASSUME_NONNULL_BEGIN

/**
 An operation that uploads a Cloud share to the Sketch Cloud API. It handles the initial manifest upload, as well as all the resources that are needed to upload a valid share.
 */
@interface SCKShareUploadOperation : SCKOperation <NSProgressReporting>

/**
 Initializes a new share upload operation.

 @param request The share upload request, created by `-[SCKShareAPIRequest shareCreationRequestWithManifest:]` or `-[SCKShareAPIRequest shareUpdateRequestWithManifest: existingShare:]`.
 @return The newly created share upload operation.
 */
- (instancetype)initWithRequest:(SCKShareAPIRequest *)request;

/// A data source that provides all required data for uploading a Cloud Share appropriately.
@property (nonatomic, nullable, weak) id<SCKShareUploadDataSource> dataSource;

/// The overall upload progress.
@property (nonatomic, strong, readonly) NSProgress *progress;

/// The resulting share that is uploaded to the API.
@property (nonatomic, strong, nullable, readonly) SCKShare *share;

/// All errors that occured while uploading the Cloud share. Existing errors don't mean that the share has not been uploaded. It might also be the case that some individual files or the document could not be uploaded. If the share property is non-nil, the user can visit the uploaded share on web.
@property (nonatomic, strong, nullable, readonly) NSArray<NSError *> *errors;

@end

NS_ASSUME_NONNULL_END
